import Image, { StaticImageData } from "next/image";

interface Props {
  productImage: StaticImageData;
  productName: string;
  productQuantity: number;
  productPrice: number;
}

const CartItem = ({
  productImage,
  productName,
  productQuantity,
  productPrice,
}: Props) => {
  return (
    <tr className="text-center border shadow-md rounded-md">
      <td className="px-4 py-2 w-1/4">
        <div className="flex items-center justify-center space-x-4">
          <Image src={productImage} alt="" className="w-20" />
          <p>{productName}</p>
        </div>
      </td>
      <td className="px-4 py-2 w-1/4">${productPrice}</td>
      <td className="px-4 py-2 w-1/4">
        <input
          type="number"
          className="border w-14 py-1 px-1 text-center"
          defaultValue={productQuantity}
        />
      </td>
      <td className="px-4 py-2 w-1/4">${productPrice}</td>
    </tr>
  );
};

export default CartItem;
