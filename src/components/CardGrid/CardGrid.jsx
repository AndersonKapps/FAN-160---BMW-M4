import { Card } from "../Card/Card"
import styles from "./CardGrid.module.css"
export const CardGrid = () => {
    return (
        <div className={styles.grid}><Card
        name="Fan 160"
        description="Para os afazeres do dia a dia..."
        image="https://i.ytimg.com/vi/Lq5fHJd-nns/maxresdefault.jpg"
      />
      <Card
      name="BMW M4"
      description="Carro Dos Sonhos!"
      image="https://th.bing.com/th/id/R.4f73a1faf0078318503a66a80c2fea69?rik=E9nLmrw3Wmdk%2bA&pid=ImgRaw&r=0"
    />
    </div>

    );
};