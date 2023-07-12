const product = (index) => {
  return {
    hidden: {
      opacity: 0,
      y: index % 2 === 0 ? -90 : 90,
      x: index % 2 === 0 ? -40 : 40,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { delay: index * 0.2, when: "beforeChildren" },
    },
  };
};

export default product;
