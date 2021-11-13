import "./access.css";
import { Link } from "react-router-dom";
const Access = () => {
  return (
    <>
      <img
        className="gif_access_ss"
        src="https://s3-alpha-sig.figma.com/img/08ab/91b2/f56f91622fe2b47935862609a80cf531?Expires=1637539200&Signature=XzhS-zfigYXWknlPPhTfrOsS-Myb~wsivXhbE8rTALhPiecusecHo~VYLz--kuCZIYfH5Ief0W76KQjpMZTlzJR4sqoTHoMTc84ZTczBYy6y3-vPxh8fUVEELR5DTsAeorsO8nYnjNMUO-MtQwtiIva6YmQssqoBsKCj3zyOI8IJ2AOe8oYsfp8lN~dhj4wN6kodjTGfLWWQyRKWnrGuFVzBfVRHlZF1oi6tnBs~nDczixFbkmCk58bc~O3OswlB-1rKk~uWZy1oHi3216feO9rEqogFgmxkm7n~5OeCPL8VtmuF9fnU7MN0y9zQoWkQ4tyxRnSR~PXKLXI-mlhw2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt=""
      />
      <h3 className="h_ss">Access Location</h3>
      <p className="p_ss">
        To recommend fun places to visit near your location{" "}
      </p>
      <button className="access_ss">Allow Access</button>
      <Link to="/fernway/home/true">
        <p className="skip_ss">Skip for now</p>
      </Link>
    </>
  );
};
export { Access };
