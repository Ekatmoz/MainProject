// connection to our database

import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    mongoose.set('strictQuery', false);
    const mongoUri = process.env.MANGO_URI || process.env.MONGO_URI;
    // #region agent log
    fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',hypothesisId:'C',location:'server/database.js:connect',message:'mongo connect attempt',data:{hasUri:Boolean(mongoUri),uriType:typeof mongoUri},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    if (!mongoUri) {
      throw new Error('Missing MANGO_URI (or MONGO_URI). Add it to a .env file in the project root.');
    }
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    // #region agent log
    fetch('http://127.0.0.1:7496/ingest/9f92fad2-514b-4fba-a5b9-78c337f6a1dc',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'36dee2'},body:JSON.stringify({sessionId:'36dee2',hypothesisId:'C',location:'server/database.js:catch',message:'mongo connect failed',data:{error:error.message},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  } 
};

export default connectToDatabase;