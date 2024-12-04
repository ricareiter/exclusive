import Image, { StaticImageData } from "next/image";

interface Props {
  productImage: StaticImageData;
  productName: string;
  productQuantity: number;
  productPrice: number;
  productSubtotal: number;
}

const CartItem = ({
  productImage,
  productName,
  productQuantity,
  productPrice,
  productSubtotal,
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
      <td className="px-4 py-2 w-1/4">{productQuantity}</td>
      <td className="px-4 py-2 w-1/4">${productSubtotal}</td>
    </tr>
  );
};

export default CartItem;
