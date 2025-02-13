import React from "react";
import "../styles/Portfolio.css"; // Make sure to style it properly

const facebookImages = [
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/466922641_1091525802665892_7583717777585885230_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0qHRXi6NvtMQ7kNvgHQecM7&_nc_oc=AdggZXemcwZn-1pDC2r4-cxxFE6yVS9nzw6bZr0i-QoczvnluVq5O_zOiGhita87oOeKVUoRPO10zp5Xp8qO22ic&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=ADBN3l9IolcHkZJTRmpJaaj&oh=00_AYDyrJL9uCGlWJuA69cX2opJRnxKXWWDk09KKntYDcYFwA&oe=67B2CAFF",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/466655269_1090077906144015_8402210287023461388_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TcOm0JhcFcoQ7kNvgHYk6BA&_nc_oc=AdgnnVG4fANL_x9iyiqa0ETMi8HoC-zC8vAZJhWYp3KruXLzgdtu-t2CHgC3s1Q42f6vep-0_Q6QXy19ymYqI4zy&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=AXMEppwbI0IOdgGO8z0CKPh&oh=00_AYDZwLuloawX13K_PS59Wx80am8ZKEHQR1ncbNDcPJ4YVA&oe=67B2D14D",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/466510917_1090077926144013_8237249450566295461_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nOrpAY3_7tcQ7kNvgHpqtx5&_nc_oc=AdjgODK3xE5ozmC7eCJrKzGV4J_FqdyUsrljAmq84-zUWpeuaxOsa__NeVOYUG5zIzCVVBhNyiKIiDXsCeCTkEhA&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=AQWiloLBocJyl9WS04QoQe9&oh=00_AYDdp4TQebVgzN_6wL1lDQ3MQO4U6kh7umZC5auxgSIwcQ&oe=67B2DBFE",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/457503186_8563918676953805_1695549590933665991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=roHaxrN5tJsQ7kNvgGkAAsL&_nc_oc=AdhRJn2p4asJIZakPUk6hgNrttMsjEKSUzv2fthGSDBVmxcH3Xnw2wZ7TmwI6DQk10a1QS3zVKHumO_Ib_Q-Eess&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=Aft_-oWhBnJ4s7XasqrYt02&oh=00_AYACS0r3aymSucyw1X8K0kTer9k4XLKTfbEAkgkd8zlBwA&oe=67B2E30B",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/283434623_5144973605579321_8145385468398623264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kk4uZS4XYG8Q7kNvgEAxwTB&_nc_oc=AdgD44Wmny3ERVTyfW7yUhSvfKXEruwISoHfRjraaOrDIxOlESSwbgqSHf7UlDvZ-OFtz-B1iC-dIP3_jtVptAis&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=Afj8FbAziL8rnqO3k3AbviK&oh=00_AYAqaeQlL9nE1g38ErdyBxK7YEuNwqT284ZiPCWts_hbMQ&oe=67B2DA6F",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/357546658_798496111968864_8073146925256605981_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ahsd1rIAMZIQ7kNvgGkUTUw&_nc_oc=AdhAzdbm4UW6wfE-oqUxDf0zL2nKIb2AgTxpdX7Xy4ZYWSFghCkmIkEB3qqU5yyiNcuwkveWA6_8tZ4Gi585tzmU&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=AdfaMs3a0IYp9gU2jW7ZxDO&oh=00_AYCSlefeLR5Ipff1gJAorw0pNBb3ju0VS9rlAmzedIS_bA&oe=67B2D1AB",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/357484083_798496445302164_6862987376326699834_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ggiKsQKcGsMQ7kNvgEYsGfn&_nc_oc=Adh1qaEjKf3ZwqzIqGDVWOAteBbYGCIeQPxwL4-2DR1ZzSuLwC2dEofB4KyPJNXUoPerW47cF75F29a3wmDiV5rx&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=A25ijLtvFw1kAalxkAOASDb&oh=00_AYCmHYOVN1qSmJ_SDunriWvOUVars96ZxJLgH5tXICSfmQ&oe=67B2CACF",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/356422108_798496425302166_5452268929935391534_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8MM0qAlkC6wQ7kNvgEn8zb7&_nc_oc=AdiM3-tl9-c9HJZD5ZFlQMDQMUHgkYL4HI5P-Ez4Hmp3iLVDyxQgJZQ5VMu_Knbdv8_93U8Br5jrSrUpOJw4M5Y-&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=A7nGxXgXqJWAyl2TDoti8vU&oh=00_AYAQibUCsXRoSkGB9qTif12iXW-XLxDUna5LKq-7b-B41g&oe=67B2E43D",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/476730650_1151801346638337_2452231161892443728_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=w7vc1u16SEcQ7kNvgHvKQvP&_nc_oc=AdiendxPBMon6qwD80kpWZCaSqQvomTzLAM9IFV0nYKNMIWPKj3c65pKxLaUQGqs3mA2tzVyipi2m-yu6EchWPmm&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=AXu2GTln7Fxv5lwDeVjDlHV&oh=00_AYAErdhs-Mw-rvDpbiYGm_oIDgu7elDED4csFAAFYEt50w&oe=67B2C2E8",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/476827974_1151808076637664_8121174719276801220_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uADpQm0kS0UQ7kNvgGcGaTk&_nc_oc=AdhwQctO77lgXlBRrk1f4IIBcj8WxTZH4FpKaPoJmP5xthDXNzcLTDirpWpq2EpB23t1LPrNtJ12u8MJWpmj3yg2&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=AyJjqf1QTUS-hP0pvk4YgPL&oh=00_AYByVvqPfmI2j78BT0szo3VsST4tMwNkW_S67962WO5zzA&oe=67B2DCA3",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/356411336_798494365302372_3063838414348103333_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oAXsEaYDe9AQ7kNvgEHs6p8&_nc_oc=AdhYv3chYXNIlVnYndKvYfn7tz_bfESXvUZjFO1Qe2Y-lScrT6tPTCwgCtRZdVUp1eiz8LyfNheavrD3HPLHL12M&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=ANmoBc_boficeR81s0eIRZ1&oh=00_AYCReYvMg4yKTo7rCsW0cs1lGHNfvd6GICCq-Wsd5GUOdA&oe=67B2E3AD",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/476448769_1151801459971659_3451770512969829579_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=diq2BbEJO30Q7kNvgFda2li&_nc_oc=AdhBpMm4HzbunCr-YwbLV69iwBDjYse8sRsABdwQWhNDEegfksM3aIRkTvBR2XP_JTCEClMaFXoZs0lqbaldjJar&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=AmfQ6UDhRAEidLBSyEhhVWf&oh=00_AYDVnPPEXUVRgiwY67n2p5COlEYLuc3EkFgAplYRRzA2Ag&oe=67B2CBDB",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/283434623_5144973605579321_8145385468398623264_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kk4uZS4XYG8Q7kNvgEAxwTB&_nc_oc=AdgD44Wmny3ERVTyfW7yUhSvfKXEruwISoHfRjraaOrDIxOlESSwbgqSHf7UlDvZ-OFtz-B1iC-dIP3_jtVptAis&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=Afj8FbAziL8rnqO3k3AbviK&oh=00_AYAqaeQlL9nE1g38ErdyBxK7YEuNwqT284ZiPCWts_hbMQ&oe=67B2DA6F",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/274623177_4921868111223206_4116913587980277315_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zpRw4Rph9p4Q7kNvgFNkCqP&_nc_oc=AdiO5qSPcYcG-ijFw416akKcG79S25mHC2CaDc0hqreDU8YaaTB7sNKWXxgkUwv0ltdrDDm6bBEj7P-5OSkIM0Fl&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=AlJO8fdEf-XsaJNUBRU5HzQ&oh=00_AYCZjYEPSMDhr8aKetzJAQWrszbQgEleraFG5stbVSkQOw&oe=67B2E1C8",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/274728613_4916403538436330_4373189594201885077_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rcTiICkBluUQ7kNvgGj9nbV&_nc_oc=AdjCu0uD3g5iIvLB9CEq-uZKENVPMHS5wKwFOpd1494BpAPvRuBthwHTitDzlsf2qsokUtmWkkDGlIvBpOQ08hMr&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=AwKNJiDkfbXNF-JdoUt12WM&oh=00_AYCORmQzDz8CLkjh6Q9cKhOpINX15bPmqJxi2H3XQXxR2g&oe=67B2E7F9",
  "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/475135114_1143517810800024_4787475359522376385_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e6b1P4ITM28Q7kNvgGcenkA&_nc_oc=Adi3mBs_wrM9MIVPw15vz99yuTeMi_ayKMijFKh9dz_qfhYTRyAkA2G7DnwYET_37HR2wEbhDTyGbl-rONqa4FLe&_nc_zt=23&_nc_ht=scontent-bcn1-1.xx&_nc_gid=Az0IVHtspoueXkR-59pWlXo&oh=00_AYASgIFMpw66uxFJKrSplZoGRsp2ujxHe_ns0udE3XOTqg&oe=67B2BE22",
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Portofoliu</h2>
      <div className="portfolio-grid">
        {facebookImages.map((image, index) => (
          <div key={index} className="portfolio-card">
            <img src={image} alt={`Portofoliu ${index + 1}`} className="portfolio-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
