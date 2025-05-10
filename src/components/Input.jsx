function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props}
    ></input>
    //     <input
    //     type={props.type}
    //     className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
    //     placeholder={props.placeholder}
    //     value={props.value}
    //     onChange={props.onChange}
    //   ></input>
  );
}

export default Input;
