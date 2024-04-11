import styled from "styled-components"

const Container = styled.div`
    margin: 50px;
`


export default function Pagination({prev, next, onPrevious, onNext}){

    const handlePrevious = () => {
        onPrevious()
    }

    const handleNext = () => {
        onNext()
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                { prev ? (
                    <li className="page-item"> 
                        <button 
                          className="page-link" 
                          onClick={handlePrevious} 
                          style={{ width: '80px', color: '#008B8B', background: 'linear-gradient(to left, #242424, #006400)' }}>
                            Anterior
                        </button>
                    </li>
                ) : null} 
                { next ? (
                    <li className="page-item">
                        <button 
                          className="page-link" 
                          onClick={handleNext} 
                          style={{ width: '80px', color: '#008B8B', background: 'linear-gradient(to left, #242424, #006400)' }}>
                            Próximo
                        </button>
                    </li>
                ) : null}            
            </ul>
        </nav>
    )
}