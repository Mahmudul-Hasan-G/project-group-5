

const News = ({news}) => {
    const {id, category, heading, img, description} = news;
    return (
        <div className="border-2px solid black mb-6">
            <div className="card w-96 bg-base-100 shadow-xl w-full">
  <figure><img className="w-full" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl">{heading}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Full News</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default News;