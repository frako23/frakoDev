import PropTypes from "prop-types";
const Card = (props) => {
  return (
    <>
      <div className="box btn_shadow">
        <div className="title_content d_flex">
          <div className="title">
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
          {/* <div className='rate'>
            <button className='btn_shadow '>{props.rate}</button>
          </div> */}
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired, // o PropTypes.string si es texto
  year: PropTypes.number.isRequired, // o PropTypes.string si es texto
  desc: PropTypes.string.isRequired, // o PropTypes.string si es texto
};

export default Card;
