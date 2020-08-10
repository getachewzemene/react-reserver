import React, { useState, useEffect } from 'react'
import Reserver, {
  Bar,
  useReserver,
  reserverReducer,
  createBar,
  getPosition,
  resizeBar,
  finishEditingBars,
  Tag
} from 'react-reserver'
import 'react-reserver/dist/index.css'
import moment from 'moment'
import { resolveColumnStart, resolveRow, resolveLength, positionToDate } from './helpers'
import { rooms, preMadeReservations } from './testdata'
import './example.css'









export default function DateOverflow(props) {
  const { bars, isEditing, setIsEditing, addBar, setBars, editBar } = useReserver(
    reserverReducer,
    []
  )
  const [startDate, setStartDate] = useState(moment("01-08-2020", "DD-MM-YYYY"))


  useEffect(() => {

    const nBars = preMadeReservations.map((bar) => {
      if (bar.start && bar.end) {

        bar.length = resolveLength(bar.start, bar.end)
      }

      if (bar.start && bar.end) {
        bar.column = resolveColumnStart(startDate, bar.start)
      }

      if (bar.roomId) {
        bar.row = resolveRow(rooms, bar.roomId)

      }
      return bar;
    })


    setBars(nBars)

  }, [preMadeReservations])





  return (
    <React.Fragment>
      <div style={{ marginBottom: "10px" }}>Start date: <span className="button button--success"> {startDate.format("LL")}</span></div>
      <Reserver
        mouseDownCell={(props) => {

          const newbar = createBar(props.dimension, props.cell)
          addBar(newbar)
          setIsEditing(true)
        }}
        mouseEnterCell={(props) => {
          if (isEditing) {

            const nBars = resizeBar(bars, props)
            setBars(nBars)
          }
        }}
        mouseUpCell={() => {
          const dBars = finishEditingBars(bars)
          setBars(dBars)
          setIsEditing(false)
        }}
      >
        {({ dimension, columnCount }) => {
          return bars.map((bar) => {



            if (bar.column < 0) {
              bar.leftOverflow = true;
              bar.length = bar.length + bar.column;
              bar.column = 0;
            }

            if (columnCount < bar.column + bar.length) {
              bar.rightOverflow = true;
              bar.length = columnCount - bar.column

            }

            return (
              <Bar
                key={bar.id}
                {...bar}
                style={{
                  overflow: "hidden",
                  pointerEvents: bar.editing ? "none" : "auto",
                  ...bar.style,
                  ...getPosition(bar.row, bar.column, dimension)
                }}

              >
                <Tag style={{ pointerEvents: "none", color: "#fff", width: dimension * bar.length }}>{bar.guestName}</Tag>
              </Bar>
            )
          })
        }}
      </Reserver >
    </React.Fragment>
  )
}
