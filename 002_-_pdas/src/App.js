import ProfileCard from './ProfileCard';

import img_Alexa from './images/alexa.png';
import img_cortana from './images/cortana.png';
import img_siri from './images/siri.png';

import 'bulma/css/bulma.css';

function App() {
  return (
    <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal Digital Assistants</p>
            </div>
        </section>

        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard title="Alexa" handle="@alexa99" imgSrc={img_Alexa}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Cortana" handle="@cortana66" imgSrc={img_cortana}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Siri" handle="@siri88" imgSrc={img_siri}/>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

export default App;
