export default {
    container: {
      margin: '8px',
      border: '1px solid lightgrey',
      borderRadius: '2px',
      width: '25%',
      height: '80%',
      display: 'flex',
      flexDirection: "column", 
      backgroundColor: 'skyblue'      
    },
    title: {
        padding: '8px',
        textAlign: 'center'
    },
    joblist: {
      padding: '8px',
      transition: 'background-color 0.2s ease-in',
    //   background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
      flexGrow: 1,
      minHeight: '100px '       
    }
}


// const Container = styled.div`
//     margin: 8px;
//     border: 1px solid lightgrey;
//     border-radius: 2px;
//     width: 220px;
//     display: flex;
//     flex-direction: column;
// `;
// const Title = styled.h3`
//     padding: 8px;
//     text-align: center;
// `;
// const TaskList = styled.div`
//     padding: 8px;
//     transition: background-color 0.2s ease-in;
//     background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
//     flex-grow: 1;
//     min-height: 100px;
// `;