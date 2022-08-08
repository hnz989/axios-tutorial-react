import Title from './components/Title';
import Setup from './examples/1-first-request'
import Headup from './examples/2-headers'
import Postup from './examples/3-post-request'
import GlobalInst from './examples/4-global-instance'
import CustomIns from './examples/5-custom-instance'

function App() {
    return (
        <main>
            <Title/>
            <Setup/>
            <Headup/>
            <Postup/>
            <GlobalInst/>
            <CustomIns/>
        </main>
    );
}

export default App;
