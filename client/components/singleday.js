import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchTasks, fetchEvents, fetchNotes, gotNextDay, gotPreviousDay, updatedDay} from '../store';
import {Tasks, Events, Notes} from './';

class SingleDay extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const {tasks, events, notes, day, previousDay, nextDay, updateDay} = this.props
    const tasksOnDay = tasks.filter(function(task){
        return task.date === day
    })
    const eventsOnDay = events.filter(function(event){
        return event.date === day
    })
    const notesOnDay = notes.filter(function(note){
        return note.date === day
    })

    return (

      <div >
       <div className="singlePage-container">
        <a href='#' className="previous round" onClick={previousDay}> &#8249;</a>
        <h2 className="singlePage-title"> {moment(day).format("dddd, MMMM Do YYYY")} </h2>
        <a href='#' className="next round" onClick={nextDay}> &#8250;</a>
        </div>
        <hr />
        <button onClick={() => updateDay(moment(new Date()).format("YYYYMMDD"))}> Current Day </button>
          <Tasks tasks={tasksOnDay} />
        <Link to={'/addtask'}>
          <button> Add Tasks </button>
        </Link>
        <h3 className="singleName-headings">Events</h3>
        <Events events={eventsOnDay} />
        <Link to={'/addevent'}>
        <button> Add Event </button>
        </Link>

        <Notes notes={notesOnDay} />
        <Link to={'/addnote'}>
          <button> Add Note </button>
        </Link>
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  tasks: state.tasks,
  events: state.events,
  notes: state.notes,
  day: state.day
});

const mapDispatch = (dispatch) => {
  return {
    loadData(userId) {
      dispatch(fetchTasks(userId));
      dispatch(fetchEvents(userId));
      dispatch(fetchNotes(userId));
    },
     nextDay() {
            dispatch(gotNextDay())
        },
    previousDay() {
            dispatch(gotPreviousDay())
    },
    updateDay(day){
      dispatch(updatedDay(day))
    }
  };
}

export default connect(mapState, mapDispatch)(SingleDay);
