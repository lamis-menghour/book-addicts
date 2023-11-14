import React from "react";

function NewsLetter() {
  return (
    <div className="newsletter">
      <form action="">
        <h3>اشترك للحصول على آخر التحديثات</h3>
        <div className="inputs">
          <input
            type="email"
            name=""
            // placeholder="exemple@gmail.com"
            id=""
            className="box"
          />
          <input type="submit" value="اشترك" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default NewsLetter;
