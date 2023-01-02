import ImageShow from "./ImageShow";
import "./css/list.css";

function ImageList({images}) {
  const renderedImages=images.map((image)=>{
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="list">{renderedImages}</div>;
}

export default ImageList;
