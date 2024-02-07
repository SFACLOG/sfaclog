import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETEBASE_HOST);

pb.autoCancellation(false);

export default pb;
