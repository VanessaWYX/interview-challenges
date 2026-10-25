const ToDoGrid = () => {

    return(
    <>
        <section id="todogrid">
            <form>
                <table>
                    <tr>
                        <th>
                            To Do Items
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                    <tr>
                        <input type="text" id="item1" name="item1" placeholder="Enter item" />
                    </tr>
                </table>
            </form>
        </section>
    </>);
}

export default ToDoGrid;