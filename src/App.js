import Title from './components/Title';
import Setup from './examples/1-first-request'
import Headup from './examples/2-headers'
import Postup from './examples/3-post-request'
import GlobalInst from './examples/4-global-instance'
import CustomIns from './examples/5-custom-instance'
import IntercepIns from './examples/6-interceptors'

function App() {
    return (
        <main>
            <Title/>
            <Setup/>
            <Headup/>
            <Postup/>
            <GlobalInst/>
            <CustomIns/>
            <IntercepIns/>
        </main>
    );
}

export default App;
