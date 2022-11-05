const allStudent = (req, res) => {
  res.send("All Student");
};

const deleteStudent = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    if (parseInt(id) === 10) {
      res.send("Its sonam id its cant be deleted");
    }
    res.send(`Student delete: ${id}`);
  }

// old
// module.exports = {allStudent}

// new
export { allStudent, deleteStudent };
