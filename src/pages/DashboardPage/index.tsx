import { Header } from "../../components/Header";
import { ExercisesHabbits } from "./HabbitsComponents/Exercise";
import { StudyHabbits } from "./HabbitsComponents/Study";
import { SleepHabbits } from "./HabbitsComponents/Sleep";
import { DashboardContainer, DashBoardContent } from "./styles";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalTemplate } from "../../components/Modal/Template";

const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const userName = user?.name;
  const { autoLoginUser, sleep, training, study } = useContext(UserContext);

  useEffect(() => {
    if (sleep.length === 0 || training.length === 0 || study.length === 0) {
      autoLoginUser();
    }
  }, [sleep, training, study]);

  const { showModal } = useContext(ModalContext);

  return (
    <DashBoardContent>
      {showModal && <ModalTemplate modalType={showModal} />}
      <Header showButtons="show" />
      <DashboardContainer>
        <h1>Meu Resumo</h1>
        <h4>Olá, {userName}</h4>
        <div className="habbitsResume__content">
          <SleepHabbits />
          <ExercisesHabbits />
          <StudyHabbits />
        </div>
      </DashboardContainer>
    </DashBoardContent>
  );
};

export { DashboardPage };

