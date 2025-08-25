import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "../styles/About.css";

const About = () => {
  const [aboutImageUrl, setAboutImageUrl] = useState("");

  useEffect(() => {
    const fetchAboutImage = async () => {
      const db = getFirestore();
      const docRef = doc(db, "aboutus", "aboutpicture");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAboutImageUrl(docSnap.data().imageURL);
      }
    };
    fetchAboutImage();
  }, []);

  return (
    <div className="about-container">
      <div className="about-image-wrapper">
        {aboutImageUrl && (
          <img
            src={aboutImageUrl}
            alt="Floraria Crinul Regal - About Us"
            className="about-image"
          />
        )}
      </div>

      <h2 className="about-heading">
        La Florăria Crinul Regal, transformăm florile în povești și emoții de neuitat.
      </h2>

      <div className="about-text">
        <p>
          Cu o experiență de peste 20 de ani, am devenit un reper în arta
          floristică, oferind buchete și aranjamente elegante pentru orice
          ocazie.
        </p>
        <p>
          Fie că sărbătorești o nuntă de vis, un botez emoționant sau o
          aniversare specială, noi creăm decoruri care impresionează și rămân în
          amintire. Cu pasiune și rafinament, dăm viață fiecărui detaliu:
          aranjamente florale deosebite, photo corner-uri care inspiră zâmbete
          și decoruri creative cu baloane. Totul este realizat cu grijă, astfel
          încât atmosfera să reflecte perfect emoția și unicitatea momentului
          tău special.
        </p>
        <p>
          Alege Florǎria Crinul Regal – acolo unde pasiunea pentru design floral
          și decor întâlnește eleganța și profesionalismul!
        </p>
      </div>
    </div>
  );
};

export default About;