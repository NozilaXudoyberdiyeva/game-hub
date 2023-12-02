import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import getCroppedImage from "../../services/image-url";
const GameCard = ({ game }) => {
  return (
    <Card borderRadius="xl" overflow="hidden">
      <Image src={getCroppedImage(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading size="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

GameCard.PropTypes = {
  game: PropTypes.object,
};

export default GameCard;
