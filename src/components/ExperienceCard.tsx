type Props = {
  img: string;
  items: string[];
  title: string;
};

const ExperienceCard = ({ img, items, title }: Props) => {
  return (
    <div className="experience-card-container">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>Worked with</p>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
