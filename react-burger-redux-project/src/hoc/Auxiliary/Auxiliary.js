/**
 * Higher order component for wrapping adjacent JSX 
 * elements without using HTML elements, i.e. <div></div>
 * React 16.2 has fragment using an empty JSX tag
 * <>
 *  <h1>First Element</h1>
 *  <h1>Second Element</h1>
 * </>
 * @param {*} props 
 */
const auxiliary = (props) => {
  return props.children;
};

export default auxiliary;
