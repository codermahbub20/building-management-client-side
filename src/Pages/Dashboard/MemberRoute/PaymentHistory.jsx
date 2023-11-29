import { useState, useEffect } from 'react';
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [searchMonth, setSearchMonth] = useState('');

    const axiosSecure = useAxiosSecure();

    useEffect(() => {

        axiosSecure.get('/payments')
            .then(res => {
                setPaymentHistory(res.data);
            });
    }, [axiosSecure]);

    const handleSearch = () => {

        const filtered = paymentHistory.filter(payment =>
            payment.month.toLowerCase().includes(searchMonth.toLowerCase())
        );


        const sortedPayments = [...filtered, ...paymentHistory.filter(payment => !filtered.includes(payment))];
        setPaymentHistory(sortedPayments);
    };

    return (
        <div>
            <h1 className="text-4xl font-medium text-center">All Payment History are Here</h1>

            <div className='w-3/4 mx-auto'>
                {/* Search Input */}
                <div className='p-5 px-2'>
                    <label>
                        Search by Month:
                        <input type="text" value={searchMonth}
                            onChange={(e) => setSearchMonth(e.target.value)}
                            placeholder="Enter month name or number" className="input input-bordered ml-3 input-secondary w-full max-w-xs" />
                    </label>
                    <button className='btn space-x-3 ml-3 btn-success' onClick={handleSearch}>Search</button>
                </div>

                {/* Display Payment History Table */}
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Month</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentHistory.map((payment, index) => (
                                <tr key={payment?._id} className={payment.month.toLowerCase() === searchMonth.toLowerCase() ? 'highlighted' : ''}>
                                    <th>{index + 1}</th>
                                    <td>{payment?.email}</td>
                                    <td>{payment?.month}</td>
                                    <td>{payment?.taka} TK</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;



