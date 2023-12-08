import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    inique: true,
  },
  password: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  firstLogin: { 
    type: Boolean, 
    default: true },

	googleImage: { type: String, default: undefined },
	googleId: { type: String, default: undefined },
}, 
  {timestamps: true}
);

userSchema.methods.matchPasswords = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}; //check the passward and we call this method in our routes

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next(); //if password was modified by user
  }
  const salt = await bcrypt.genSalt(10);// 10 rounds of encryption
  this.password = await bcrypt.hash(this.password, salt); //saving
}); // to encrypt password

const User = mongoose.model('User', userSchema);
export default User;
