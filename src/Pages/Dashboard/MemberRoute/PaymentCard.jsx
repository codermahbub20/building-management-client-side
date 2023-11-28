import { useParams } from "react-router-dom";


const PaymentCard = () => {

    const {rent} = useParams()
    console.log(rent)

    return (
        <div>
            Hello
        </div>
    );
};

export default PaymentCard;