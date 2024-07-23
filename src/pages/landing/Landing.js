import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      {/* <Draw /> */}
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter 
                .typeString("I'm a Software Developer")
                .pauseFor(1500)
                .deleteChars(17)
                .typeString("tudent")
                .pauseFor(1500)
                .deleteAll(100)
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
