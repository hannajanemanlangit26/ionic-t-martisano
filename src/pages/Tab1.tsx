import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
IonAlert, IonButton, IonActionSheet  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">profile</IonTitle>
          </IonToolbar>

          
        </IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/bear.webp" />
      <IonCardHeader>
        <IonCardTitle>hanny</IonCardTitle>
        <IonCardSubtitle>student</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Don't be trapped in someone else's dream</IonCardContent>
      <IonButton id="present-alert" expand='full'>Click Me</IonButton>


    </IonCard>
      <IonAlert
        header="Alert!"
        trigger="present-alert"
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Alert canceled');
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              console.log('Alert confirmed');
            },
          },
        ]}
        onDidDismiss={({ detail }) => console.log(`Dismissed with role: ${detail.role}`)}
      ></IonAlert>

<IonButton  id="present-alert" expand='full'>Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    
    
    

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
