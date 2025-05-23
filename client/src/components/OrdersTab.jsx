import {
	Box,
	TableContainer,
	Th,
	Tr,
	Table,
	Td,
	Thead,
	Tbody,
	Button,
	useDisclosure,
	Alert,
	Stack,
	Spinner,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Wrap,
	Text,
	Flex,
	Select, // Chakra UI Select component
	useToast,
} from '@chakra-ui/react';
import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, deleteOrder, resetErrorAndRemoval, setDelivered, updatePaymentStatus } from '../redux/actions/adminActions'; // Import updatePaymentStatus action
import ConfirmRemovalAlert from './ConfirmRemovalAlert';
import { TbTruckDelivery } from 'react-icons/tb';

const OrdersTab = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();
	const [orderToDelete, setOrderToDelete] = useState('');
	const dispatch = useDispatch();
	const { error, loading, orders, deliveredFlag, orderRemoval } = useSelector((state) => state.admin);
	const toast = useToast();

	useEffect(() => {
		dispatch(getAllOrders());
		dispatch(resetErrorAndRemoval());
		if (orderRemoval) {
			toast({
				description: 'Order has been removed.',
				status: 'success',
				isClosable: true,
			});
		}

		if (deliveredFlag) {
			toast({
				description: 'Order has been set to delivered.',
				status: 'success',
				isClosable: true,
			});
		}
	}, [dispatch, toast, orderRemoval, deliveredFlag]);

	const openDeleteConfirmBox = (order) => {
		setOrderToDelete(order);
		onOpen();
	};

	const onSetToDelivered = (order) => {
		dispatch(resetErrorAndRemoval());
		dispatch(setDelivered(order._id));
	};

	// Handle Payment Status Change
	const handlePaymentStatusChange = (order, newStatus) => {
		dispatch(updatePaymentStatus(order._id, newStatus)); // Dispatch action to update payment status
	};

	return (
		<Box>
			{error && (
				<Alert status='error'>
					<AlertIcon />
					<AlertTitle>Upps!</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			{loading ? (
				<Wrap justify='center'>
					<Stack direction='row' spacing='4'>
						<Spinner mt='20' thickness='2px' speed='0.65s' emptyColor='gray.200' color='cyan.500' size='xl' />
					</Stack>
				</Wrap>
			) : (
				<Box>
					<TableContainer>
						<Table variant='simple'>
							<Thead>
								<Tr>
									<Th>Date</Th>
									<Th>Name</Th>
									<Th>Email</Th>
									<Th>Shipping</Th>
									<Th>Items Ordered</Th>
									<Th>Shipping Price</Th>
									<Th>Total</Th>
									<Th>Payment Method</Th> {/* Payment Method */}
									<Th>Payment Status</Th> {/* Payment Status */}
									<Th>Delivered</Th>
									<Th>Actions</Th>
								</Tr>
							</Thead>
							<Tbody>
								{orders &&
									orders.map((order) => (
										<Tr key={order._id}>
											<Td>{new Date(order.createdAt).toDateString()}</Td>
											<Td>{order.username}</Td>
											<Td>{order.email}</Td>
											<Td>
												<Text>
													<i>Address: </i> {order.shippingAddress.address}
												</Text>
												<Text>
													<i>City: </i> {order.shippingAddress.postalCode} {order.shippingAddress.city}
												</Text>
												<Text>
													<i>Country: </i> {order.shippingAddress.country}
												</Text>
											</Td>
											<Td>
												{order.orderItems.map((item) => (
													<Text key={item._id}>
														{item.qty} x {item.name}
													</Text>
												))}
											</Td>
											<Td>{order.shippingPrice}Ft</Td>
											<Td>{order.totalPrice}Ft</Td>
											<Td>{order.paymentMethod}</Td> {/* Payment Method */}
											<Td>
												{/* Dropdown for Payment Status */}
												<Select
													value={order.paymentStatus} // Current status
													onChange={(e) => handlePaymentStatusChange(order, e.target.value)} // Update on change
												>
													<option value="pending">Pending</option>
													<option value="completed">Completed</option>
													<option value="failed">Failed</option>
												</Select>
											</Td>
											<Td>{order.isDelivered ? <CheckCircleIcon /> : 'Pending'}</Td>
											<Td>
												<Flex direction='column'>
													<Button variant='outline' onClick={() => openDeleteConfirmBox(order)}>
														<DeleteIcon mr='5px' />
														Remove Order
													</Button>
													{!order.isDelivered && (
														<Button mt='4px' variant='outline' onClick={() => onSetToDelivered(order)}>
															<TbTruckDelivery />
															<Text ml='5px'>Delivered</Text>
														</Button>
													)}
												</Flex>
											</Td>
										</Tr>
									))}
							</Tbody>
						</Table>
					</TableContainer>
					<ConfirmRemovalAlert
						isOpen={isOpen}
						onOpen={onOpen}
						onClose={onClose}
						cancelRef={cancelRef}
						itemToDelete={orderToDelete}
						deleteAction={deleteOrder}
					/>
				</Box>
			)}
		</Box>
	);
};

export default OrdersTab;
