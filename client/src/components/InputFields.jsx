const InputFields = (props) => {
  return (
    <>
      <form onSubmit={props.submitHandle}>
        <div className="form-group">
          <input
            type="text"
            className="my-2 p-1"
            style={{ borderRadius: "5px" }}
            placeholder="Title"
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="p-1"
            style={{ borderRadius: "5px" }}
            placeholder="body"
            value={props.body}
            onChange={(e) => props.setBody(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="img-up btn text-dark border bg-light mt-3"
            name="file"
            onChange={(e) => props.onChangeFile(e)}
          />
        </div>
        <button
          type="submit"
          className=" btn btn-success text-white my-3 border"
        >
          {!props.editForm ? "submit" : "update"}
        </button>
      </form>
    </>
  );
};

export default InputFields;
