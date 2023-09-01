import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useUserStore } from '~/stores/userStore';
import { useSpeedTestStore } from '~/stores/useSpeedTestStore';
import { FontProvider } from '~/cva/fontProvider';
import type { SpeedTest, SelectFont} from '~/utils/types';
import { TESTS_PER_DAY } from './index';
import  Head from 'next/head';

const Result: NextPage = () => {
  const [correct, setCorrect] = useState(0);
  const router = useRouter();
  const userStore = useUserStore();
  const speedTestStore = useSpeedTestStore();
  const user = userStore.user;
  const speedTest = speedTestStore.speedTest;

  useEffect(() => {
     
  }, [userStore, speedTestStore])
}
