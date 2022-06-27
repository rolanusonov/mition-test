// import { useSelector} from "react-redux";
// import {api} from "../https/api";
// import {useForm} from "react-hook-form";
//
// const Names = () => {
//     const {basket} = useSelector(s => s)
//
//     const totalSum = basket.reduce((acc, el) => el.quantity * el.price + acc, 0).toFixed(2)
//     const {register, handleSubmit, formState: {errors}} = useForm({
//         preventDefault: true,
//     });
//
//     const onSubmit = data => {
//
//         const dataBasket = {
//             full_name: data.full_name,
//             phone_number: data.phone_number,
//             price: totalSum,
//             region: data.region,
//             basket: JSON.stringify(basket)
//         }
//         api.post("ordering-create/", dataBasket)
//
//         return (
//             <div>
//
//             </div>
//         );
//     };
// };
//
// export default Names;