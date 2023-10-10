const TicketList = require("../models/ticketlist");

module.exports = {
  deleteTicket: (req, res) => {
    const id = req.params.id;

    TicketList.findByIdAndRemove(id)
      .then((removedTicket) => {
        if (!removedTicket) {
          return res.status(404).send("Ticket not found");
        }
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  },
  updateTicket: (req, res) => {
    const id = req.params.id;

    TicketList.findByIdAndUpdate(
      id,
      {
        status: "Closed",
      },
      { new: true } // Add this option to return the updated document
    )
      .then((updatedTicket) => {
        if (!updatedTicket) {
          return res.status(404).send("Ticket not found");
        }
        res.redirect("/");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },
};
