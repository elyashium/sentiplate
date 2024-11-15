import "../App.css";
import Lottie from 'lottie-react';
import happyAnimation from '../images/happyLottie.json';
import stressedAnimation from '../images/stressedLottie.json';
import relaxedAnimation from '../images/relaxedLottie.json';
import energeticAnimation from '../images/energeticLottie.json';

export default function MoodSelect() {
  return (
    <div className="moodContainer">

      <div className="HappySelection">
        <div className="lottieContainer">
          <Lottie animationData={happyAnimation} loop={true} />
        </div>
        <div className="moodTitle">Happy</div>
        <div className="moodDescription">
        <strong>
         how to know your Happy : 
        </strong>
          Feeling joyful, content, and lighthearted. Able to easily enjoy activities and be present. Experiencing positive emotions like contentment, joy, and enthusiasm.
        </div>
      </div>

      <div className="StressedSelection">
        <div className="lottieContainer">
          <Lottie animationData={stressedAnimation} />
        </div>
        <div className="moodTitle">Stressed</div>
        <div className="moodDescription">
        <strong>
         how to know your Stressed : 
        </strong>
          Feeling tense, anxious, or overwhelmed. Difficulty focusing or relaxing. Experiencing physical symptoms like headaches, muscle tension, or fatigue.
        </div>
      </div>

      <div className="RelaxedSelection">
        <div className="lottieContainer">
          <Lottie animationData={relaxedAnimation} />
        </div>
        <div className="moodTitle">Relaxed</div>
        <div className="moodDescription">
        <strong>
         how to know your Relaxed : 
        </strong>
          Feeling calm, peaceful, and at ease. Low levels of stress or worry. Able to rest and recharge.
        </div>
      </div>

      <div className="EnergeticSelection">
        <div className="lottieContainer">
          <Lottie animationData={energeticAnimation} />
        </div>
        <div className="moodTitle">Energetic</div>
        <div className="moodDescription">
       <strong>
         how to know your energectic : 
        </strong>
          Feeling alert, motivated, and ready for action. High levels of physical and mental energy. Enthusiasm for tasks and activities.
        </div>
      </div>
    </div>
  );
}