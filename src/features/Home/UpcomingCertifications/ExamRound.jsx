import React from 'react'
import styles from './styles.module.css'
export default function ExamRound({name, tests}) {
  return (
    <div className={styles.rounds}>
    <small className={styles.round_text}>Round 1</small>
    {tests.map(({id, name}) => <small key={id} className={styles.chip}>{name}</small>)}
</div>
  )
}
