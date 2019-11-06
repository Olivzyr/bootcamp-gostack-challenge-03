/**
 * Create file because its not interesting to execute aplication in the same node process
 * because the queue its rollout in server or one processor core with good or bad speciications
 * So because of that is interesting to execute de queue process separatly to not have any influence
 * in performace for my aplication.
 * 
 * Therefore we can execute separatly queue process to node aplication process with comands right below,
 * Obs: But its necessary configure sucrase to run corretly with nodemon modules.
 * 
 * yarn queue -> execute queue,
 * yarn dev -> execute node aplication.
 */

import Queue from './lib/Queue';



Queue.processQueue();