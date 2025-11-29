import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMAGE_URL } from "../utils/constant";
const ItemList = (props) => {
  const dispatch = useDispatch();
  const items = props?.items || [];
  const handleAdd = (item) => {
    console.log("item", item);
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="fooditems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <span></span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-2 bg-black text-white shadow-lg rounded-lg cursor-pointer"
                onClick={() => handleAdd(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={IMAGE_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
