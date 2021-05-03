import { Flex, Text } from '@chakra-ui/layout';

import { useAuth } from '../../state/authState';
import { RoomType } from '../../pages/Room';
import { useHistory } from 'react-router';

interface DashBoardRoomCardProps {
  room: RoomType;
}

const DashBoardRoomCard: React.FC<DashBoardRoomCardProps> = ({ room }) => {
  const history = useHistory();
  const authUser = useAuth((state) => state.authUser);
  const { roomName, admin, roomId } = room;

  const handleClick = () => {
    history.push(`/room/${roomId}`);
  };

  return (
    <Flex
      h="10"
      align="center"
      cursor="pointer"
      _hover={{ background: 'blackAlpha.200' }}
      transition="all 0.35s ease"
      onClick={handleClick}
    >
      <Flex px="5" justifyContent="space-between" alignItems="center">
        <Text mr="10" fontSize="lg">
          {roomName}
        </Text>
        {authUser?.username === admin && (
          <Text color="gray.500" fontSize="sm">
            You are admin
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default DashBoardRoomCard;