import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import CountdownTimer from '../../components/CountDownTimer';
import AnimatedSubmarine from '../../components/AnimatedSubmarine';
import styles from './styles.module.css';

export default function Timeline() {
  return (
    <Layout>
      <AnimatedSubmarine/>
      <div>
      </div>
    </Layout>
  );
}