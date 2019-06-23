import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "./../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newIem = {
      name: this.state.name
    };

    //Add Item
    this.props.addItem(newIem);

    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <lable for="item">Item</lable>
                  <Input
                    type="text"
                    name="name"
                    id="item"
                    placeholder="Add shopping item"
                    onChange={this.onChange}
                  />
                </FormGroup>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item
});
export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
