import { Modal } from 'react-native';
import {
  Button, ButtonText, ButtonsContainer, Container, Title,
} from './styles';

interface PopUpProps {
  isVisible: boolean;
  handleConfirm: () => void;
  handleCancel: () => void;
}

export default function PopUp({ isVisible, handleCancel, handleConfirm }: PopUpProps) {
  return (
    <Modal visible={isVisible} transparent>
      <Container>
        <Title>
          Tem certeza que quer desmarcar a partida?
        </Title>
        <ButtonsContainer>
          <Button color="confirm" activeOpacity={0.7} onPress={handleConfirm}>
            <ButtonText>
              Confirmar
            </ButtonText>
          </Button>
          <Button color="cancel" activeOpacity={0.7} onPress={handleCancel}>
            <ButtonText>
              Cancelar
            </ButtonText>
          </Button>
        </ButtonsContainer>
      </Container>
    </Modal>
  );
}
