import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export function Home() {
    return (
        <div>
        
            {/* HEAD TITLE */}
            <div className='container-fluid text-center'>
            <div className='col'>
                <h2>Cook</h2>
            </div>
            <div className='col'>
                <h2>with</h2>
            </div>
            <div className='col'>
                <h1>MANGKIR</h1>
            </div>
            </div>

            {/* BEST OF US */}
            <div className='container rounded text-center' style={{backgroundColor: 'gray'}}>
            <h3 style={{
                color: 'white',
                fontStyle: 'italic',
                padding: '20px'
            }}>Best of Us</h3>
            </div>

            {/* BEST OF US CARDS */}
            {/* TODO: continue getting data to best of us card */}
            <div className='container-fluid'>
            <div className='row text-center'>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4'>

                </div>
            </div>
            </div>

        </div>
    );
}