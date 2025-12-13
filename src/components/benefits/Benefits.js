  <FeatureIcons>
    {[1, 2, 3, 4, 5, 6].map((index) => {
      let iconSrc;
      try {
        iconSrc = require(`../../assets/images/icon${index}.svg`);
      } catch (e) {
        // Fallback to an empty div if image doesn't exist
        return <div key={index} style={{ width: 48, height: 48 }} />;
      }
      
      return (
        <motion.img
          key={index}
          src={iconSrc}
          alt={`Иконка ${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
      );
    })}
  </FeatureIcons> 