'use client';
import {useRouter} from 'next/navigation';

export default function Modal({children}) {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);
}
