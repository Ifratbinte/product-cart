export default interface ProductInterface {
  id: number;
  image?: string;
  thumbnail?:string
  title: string;
  description: string;
  price: string;
  handleClick: () => void;
}
