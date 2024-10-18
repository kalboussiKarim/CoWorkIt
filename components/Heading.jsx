const Heading = ({ title }) => {
  return (
    <section className="bg-nav-bg mb-5 px-4 py-4 flex justify-center">
      <h1 className="text-3xl font-bold tracking-tight text-appwrite-dark-pink ">
        {title}
      </h1>
    </section>
  );
};

export default Heading;
