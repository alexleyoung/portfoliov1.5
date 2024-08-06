const LeadershipCard = ({
  leadershipData,
}: {
  leadershipData: {
    title: string;
    location: string;
    description: string;
    date: string;
  };
}) => {
  return <div>{leadershipData.title}</div>;
};

export default LeadershipCard;
