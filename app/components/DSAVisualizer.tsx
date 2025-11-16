'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, ChevronDown, MessageCircle } from 'lucide-react';

type DataStructure = 'array' | 'stack' | 'queue' | 'linkedlist' | 'tree';
type SortAlgo = 'bubble' | 'quick' | 'merge' | 'insertion' | 'selection';
type SearchAlgo = 'linear' | 'binary';

interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function DSAVisualizer() {
  const [dataStructure, setDataStructure] = useState<DataStructure>('array');
  const [array, setArray] = useState<number[]>([]);
  const [stack, setStack] = useState<number[]>([]);
  const [queue, setQueue] = useState<number[]>([]);
  const [linkedList, setLinkedList] = useState<number[]>([]);
  const [tree, setTree] = useState<TreeNode | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [sortAlgo, setSortAlgo] = useState<SortAlgo>('bubble');
  const [searchAlgo, setSearchAlgo] = useState<SearchAlgo>('linear');
  const [operation, setOperation] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Array Operations
  const addToArray = () => {
    if (array.length >= 40) {
      alert('Maximum 40 elements allowed!');
      return;
    }
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setArray([...array, num]);
      setInputValue('');
    }
  };

  // Sorting Algorithms
  const bubbleSort = async (arr: number[]) => {
    const newSteps: string[] = [
      'Starting Bubble Sort...',
      `Original Array: [${arr.join(', ')}]`
    ];
    const sorted = [...arr];
    for (let i = 0; i < sorted.length - 1; i++) {
      for (let j = 0; j < sorted.length - i - 1; j++) {
        // Highlight both elements being compared
        setHighlightedIndex(j);
        setArray([...sorted]);
        await new Promise((resolve) => setTimeout(resolve, 200));
        
        if (sorted[j] > sorted[j + 1]) {
          // Highlight both elements being swapped
          setHighlightedIndex(j + 1);
          setArray([...sorted]);
          await new Promise((resolve) => setTimeout(resolve, 200));
          
          [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
          newSteps.push(`Swapped ${sorted[j]} and ${sorted[j + 1]}`);
          setArray([...sorted]);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }
    }
    newSteps.push('Array sorted successfully!');
    newSteps.push(`Sorted Array: [${sorted.join(', ')}]`);
    return newSteps;
  };

  const quickSort = async (arr: number[], low: number = 0, high: number = arr.length - 1, steps: string[] = [], originalArr?: number[]): Promise<{ arr: number[], steps: string[] }> => {
    // Store original array only on first call
    if (originalArr === undefined) {
      originalArr = [...arr];
      steps.push('Starting Quick Sort...');
      steps.push(`Original Array: [${originalArr.join(', ')}]`);
    }
    
    if (low < high) {
      const pivot = await partition(arr, low, high, steps);
      await quickSort(arr, low, pivot - 1, steps, originalArr);
      await quickSort(arr, pivot + 1, high, steps, originalArr);
    }
    
    // Add sorted array only when entire sort is complete (low === 0 and high === arr.length - 1)
    if (low === 0 && high === arr.length - 1) {
      steps.push('Array sorted successfully!');
      steps.push(`Sorted Array: [${arr.join(', ')}]`);
    }
    
    return { arr, steps };
  };

  const partition = async (arr: number[], low: number, high: number, steps: string[]): Promise<number> => {
    const pivot = arr[high];
    let i = low - 1;
    
    // Highlight pivot
    setHighlightedIndex(high);
    steps.push(`Pivot selected: ${pivot} at index ${high}`);
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    for (let j = low; j < high; j++) {
      // Highlight current element being compared
      setHighlightedIndex(j);
      steps.push(`Comparing ${arr[j]} with pivot ${pivot}`);
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      if (arr[j] < pivot) {
        i++;
        // Highlight elements being swapped
        setHighlightedIndex(i);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 200));
        
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push(`Swapped ${arr[i]} and ${arr[j]}`);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }
    
    // Highlight final swap with pivot
    setHighlightedIndex(i + 1);
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 200));
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push(`Placed pivot ${pivot} at correct position ${i + 1}`);
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    return i + 1;
  };

  const insertionSort = async (arr: number[]) => {
    const newSteps: string[] = [
      'Starting Insertion Sort...',
      `Original Array: [${arr.join(', ')}]`
    ];
    const sorted = [...arr];
    for (let i = 1; i < sorted.length; i++) {
      const key = sorted[i];
      let j = i - 1;
      
      // Highlight current element being inserted
      setHighlightedIndex(i);
      setArray([...sorted]);
      await new Promise((resolve) => setTimeout(resolve, 300));
      newSteps.push(`Inserting ${key} at position ${i}`);
      
      while (j >= 0 && sorted[j] > key) {
        // Highlight element being shifted
        setHighlightedIndex(j);
        setArray([...sorted]);
        await new Promise((resolve) => setTimeout(resolve, 200));
        
        sorted[j + 1] = sorted[j];
        j--;
        newSteps.push(`Moving ${sorted[j + 1]} to position ${j + 2}`);
        setArray([...sorted]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      
      // Highlight final position
      setHighlightedIndex(j + 1);
      sorted[j + 1] = key;
      setArray([...sorted]);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    newSteps.push('Array sorted successfully!');
    newSteps.push(`Sorted Array: [${sorted.join(', ')}]`);
    return newSteps;
  };

  const selectionSort = async (arr: number[]) => {
    const newSteps: string[] = [
      'Starting Selection Sort...',
      `Original Array: [${arr.join(', ')}]`
    ];
    const sorted = [...arr];
    for (let i = 0; i < sorted.length - 1; i++) {
      let minIdx = i;
      
      // Highlight current position
      setHighlightedIndex(i);
      setArray([...sorted]);
      await new Promise((resolve) => setTimeout(resolve, 300));
      newSteps.push(`Finding minimum from index ${i}`);
      
      for (let j = i + 1; j < sorted.length; j++) {
        // Highlight element being compared
        setHighlightedIndex(j);
        setArray([...sorted]);
        await new Promise((resolve) => setTimeout(resolve, 200));
        
        if (sorted[j] < sorted[minIdx]) {
          minIdx = j;
          // Highlight new minimum
          setHighlightedIndex(minIdx);
          setArray([...sorted]);
          await new Promise((resolve) => setTimeout(resolve, 200));
        }
      }
      
      if (minIdx !== i) {
        // Highlight both elements being swapped
        setHighlightedIndex(i);
        setArray([...sorted]);
        await new Promise((resolve) => setTimeout(resolve, 200));
        
        [sorted[i], sorted[minIdx]] = [sorted[minIdx], sorted[i]];
        newSteps.push(`Swapped ${sorted[i]} and ${sorted[minIdx]}`);
        setArray([...sorted]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }
    newSteps.push('Array sorted successfully!');
    newSteps.push(`Sorted Array: [${sorted.join(', ')}]`);
    return newSteps;
  };

  const mergeSort = async (arr: number[]): Promise<string[]> => {
    const newSteps: string[] = [
      'Starting Merge Sort...',
      `Original Array: [${arr.join(', ')}]`
    ];
    const sorted = [...arr];
    
    const merge = async (arr: number[], left: number, mid: number, right: number) => {
      const leftArr = arr.slice(left, mid + 1);
      const rightArr = arr.slice(mid + 1, right + 1);
      let i = 0, j = 0, k = left;
      
      newSteps.push(`Merging subarrays [${left}..${mid}] and [${mid + 1}..${right}]`);
      
      while (i < leftArr.length && j < rightArr.length) {
        // Highlight elements being compared
        setHighlightedIndex(left + i);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 150));
        
        setHighlightedIndex(mid + 1 + j);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 150));
        
        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          setHighlightedIndex(k);
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 200));
          i++;
        } else {
          arr[k] = rightArr[j];
          setHighlightedIndex(k);
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 200));
          j++;
        }
        k++;
      }
      
      while (i < leftArr.length) {
        arr[k] = leftArr[i];
        setHighlightedIndex(k);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 200));
        i++;
        k++;
      }
      
      while (j < rightArr.length) {
        arr[k] = rightArr[j];
        setHighlightedIndex(k);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 200));
        j++;
        k++;
      }
    };
    
    const sort = async (arr: number[], left: number, right: number) => {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await sort(arr, left, mid);
        await sort(arr, mid + 1, right);
        await merge(arr, left, mid, right);
      }
    };
    
    await sort(sorted, 0, sorted.length - 1);
    newSteps.push('Array sorted successfully!');
    newSteps.push(`Sorted Array: [${sorted.join(', ')}]`);
    return newSteps;
  };

  // Searching Algorithms
  const linearSearch = async (arr: number[], target: number) => {
    const newSteps: string[] = [`Searching for ${target} using Linear Search...`];
    for (let i = 0; i < arr.length; i++) {
      setHighlightedIndex(i);
      await new Promise((resolve) => setTimeout(resolve, 400));
      newSteps.push(`Checking index ${i}: ${arr[i]}`);
      if (arr[i] === target) {
        newSteps.push(`✓ Found ${target} at index ${i}!`);
        return newSteps;
      }
    }
    newSteps.push(`✗ ${target} not found in array.`);
    return newSteps;
  };

  const binarySearch = async (arr: number[], target: number) => {
    const sorted = [...arr].sort((a, b) => a - b);
    setArray(sorted);
    const newSteps: string[] = [`Searching for ${target} using Binary Search (array must be sorted)...`];
    let left = 0, right = sorted.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      setHighlightedIndex(mid);
      await new Promise((resolve) => setTimeout(resolve, 400));
      newSteps.push(`Checking middle element at index ${mid}: ${sorted[mid]}`);
      if (sorted[mid] === target) {
        newSteps.push(`✓ Found ${target} at index ${mid}!`);
        return newSteps;
      } else if (sorted[mid] < target) {
        left = mid + 1;
        newSteps.push(`${sorted[mid]} < ${target}, searching right half`);
      } else {
        right = mid - 1;
        newSteps.push(`${sorted[mid]} > ${target}, searching left half`);
      }
    }
    newSteps.push(`✗ ${target} not found in array.`);
    return newSteps;
  };

  // Stack Operations
  const stackPush = (value: number) => {
    if (stack.length >= 40) {
      alert('Maximum 40 elements allowed!');
      return;
    }
    setStack([...stack, value]);
    setSteps([`Pushed ${value} to stack. Stack: [${[...stack, value].join(', ')}]`]);
  };

  const stackPop = () => {
    if (stack.length === 0) {
      setSteps(['Stack is empty! Cannot pop.']);
      return;
    }
    const popped = stack[stack.length - 1];
    setStack(stack.slice(0, -1));
    setSteps([`Popped ${popped} from stack. Stack: [${stack.slice(0, -1).join(', ')}]`]);
  };

  const stackPeek = () => {
    if (stack.length === 0) {
      setSteps(['Stack is empty!']);
    } else {
      setSteps([`Top element: ${stack[stack.length - 1]}`]);
    }
  };

  // Queue Operations
  const queueEnqueue = (value: number) => {
    if (queue.length >= 40) {
      alert('Maximum 40 elements allowed!');
      return;
    }
    setQueue([...queue, value]);
    setSteps([`Enqueued ${value}. Queue: [${[...queue, value].join(', ')}]`]);
  };

  const queueDequeue = () => {
    if (queue.length === 0) {
      setSteps(['Queue is empty! Cannot dequeue.']);
      return;
    }
    const dequeued = queue[0];
    setQueue(queue.slice(1));
    setSteps([`Dequeued ${dequeued}. Queue: [${queue.slice(1).join(', ')}]`]);
  };

  const queueFront = () => {
    if (queue.length === 0) {
      setSteps(['Queue is empty!']);
    } else {
      setSteps([`Front element: ${queue[0]}`]);
    }
  };

  // Linked List Operations
  const linkedListInsert = (value: number) => {
    if (linkedList.length >= 40) {
      alert('Maximum 40 elements allowed!');
      return;
    }
    setLinkedList([...linkedList, value]);
    setSteps([`Inserted ${value} at end. List: ${[...linkedList, value].join(' -> ')}`]);
  };

  const linkedListDelete = (value: number) => {
    const index = linkedList.indexOf(value);
    if (index === -1) {
      setSteps([`Value ${value} not found in list.`]);
    } else {
      const newList = linkedList.filter((_, i) => i !== index);
      setLinkedList(newList);
      setSteps([`Deleted ${value}. List: ${newList.join(' -> ')}`]);
    }
  };

  const linkedListSearch = (value: number) => {
    const index = linkedList.indexOf(value);
    if (index === -1) {
      setSteps([`Value ${value} not found in list.`]);
    } else {
      setSteps([`Found ${value} at position ${index + 1}.`]);
    }
  };

  // Tree Operations
  const treeInsert = (value: number) => {
    // Count total nodes in tree
    const countNodes = (node: TreeNode | null): number => {
      if (!node) return 0;
      return 1 + countNodes(node.left) + countNodes(node.right);
    };
    
    if (countNodes(tree) >= 40) {
      alert('Maximum 40 nodes allowed!');
      return;
    }
    
    const newNode: TreeNode = { value, left: null, right: null };
    if (!tree) {
      setTree(newNode);
      setSteps([`Inserted ${value} as root.`]);
    } else {
      const insertNode = (node: TreeNode | null): TreeNode => {
        if (!node) return newNode;
        if (value < node.value) {
          node.left = insertNode(node.left);
        } else if (value > node.value) {
          node.right = insertNode(node.right);
        }
        return node;
      };
      const newTree = insertNode(tree);
      setTree(JSON.parse(JSON.stringify(newTree)));
      setSteps([`Inserted ${value} into tree.`]);
    }
  };

  const treeTraverse = (type: 'inorder' | 'preorder' | 'postorder') => {
    const result: number[] = [];
    const traverse = (node: TreeNode | null) => {
      if (!node) return;
      if (type === 'preorder') result.push(node.value);
      traverse(node.left);
      if (type === 'inorder') result.push(node.value);
      traverse(node.right);
      if (type === 'postorder') result.push(node.value);
    };
    traverse(tree);
    setSteps([`${type.charAt(0).toUpperCase() + type.slice(1)} Traversal: ${result.join(' -> ')}`]);
  };

  const resetDataStructure = () => {
    setArray([]);
    setStack([]);
    setQueue([]);
    setLinkedList([]);
    setTree(null);
    setSteps([]);
    setHighlightedIndex(null);
    setInputValue('');
    setSearchValue('');
  };

  const executeOperation = async () => {
    if (dataStructure === 'array') {
      if (operation === 'sort') {
        setIsAnimating(true);
        setSteps([]);
        let result: string[] = [];
        switch (sortAlgo) {
          case 'bubble':
            result = await bubbleSort(array);
            break;
          case 'quick':
            const arrCopy = [...array];
            const quickResult = await quickSort(arrCopy, 0, arrCopy.length - 1, []);
            result = quickResult.steps;
            setArray(arrCopy);
            break;
          case 'merge':
            result = await mergeSort([...array]);
            break;
          case 'insertion':
            result = await insertionSort(array);
            break;
          case 'selection':
            result = await selectionSort(array);
            break;
        }
        setSteps(result);
        setHighlightedIndex(null);
        setIsAnimating(false);
      } else if (operation === 'search') {
        const target = parseInt(searchValue);
        if (isNaN(target)) {
          alert('Please enter a valid number!');
          return;
        }
        setIsAnimating(true);
        setSteps([]);
        const result = searchAlgo === 'linear'
          ? await linearSearch(array, target)
          : await binarySearch(array, target);
        setSteps(result);
        setHighlightedIndex(null);
        setIsAnimating(false);
        setSearchValue('');
      } else if (operation === 'insert') {
        const value = parseInt(inputValue);
        if (!isNaN(value)) {
          addToArray();
          setSteps([`Inserted ${value} at the end.`]);
          setInputValue('');
        }
      } else if (operation === 'delete') {
        const value = parseInt(searchValue);
        if (isNaN(value)) {
          alert('Please enter a valid number!');
          return;
        }
        const index = array.indexOf(value);
        if (index > -1) {
          setArray(array.filter((_, i) => i !== index));
          setSteps([`Deleted ${value} from array.`]);
        } else {
          setSteps([`${value} not found in array.`]);
        }
        setSearchValue('');
      }
    } else if (dataStructure === 'stack') {
      if (operation === 'push') {
        const value = parseInt(inputValue);
        if (!isNaN(value)) {
          stackPush(value);
          setInputValue('');
        }
      } else if (operation === 'pop') stackPop();
      else if (operation === 'peek') stackPeek();
      else if (operation === 'isEmpty') setSteps([stack.length === 0 ? 'Stack is empty.' : `Stack has ${stack.length} element(s).`]);
    } else if (dataStructure === 'queue') {
      if (operation === 'enqueue') {
        const value = parseInt(inputValue);
        if (!isNaN(value)) {
          queueEnqueue(value);
          setInputValue('');
        }
      } else if (operation === 'dequeue') queueDequeue();
      else if (operation === 'front') queueFront();
      else if (operation === 'isEmpty') setSteps([queue.length === 0 ? 'Queue is empty.' : `Queue has ${queue.length} element(s).`]);
    } else if (dataStructure === 'linkedlist') {
      if (operation === 'insert') {
        const value = parseInt(inputValue);
        if (!isNaN(value)) {
          linkedListInsert(value);
          setInputValue('');
        }
      } else if (operation === 'delete') {
        const value = parseInt(searchValue);
        if (!isNaN(value)) {
          linkedListDelete(value);
          setSearchValue('');
        }
      } else if (operation === 'search') {
        const value = parseInt(searchValue);
        if (!isNaN(value)) {
          linkedListSearch(value);
          setSearchValue('');
        }
      } else if (operation === 'traverse') {
        setSteps([`Linked List: ${linkedList.join(' -> ') || 'Empty'}`]);
      }
    } else if (dataStructure === 'tree') {
      if (operation === 'insert') {
        const value = parseInt(inputValue);
        if (!isNaN(value)) {
          treeInsert(value);
          setInputValue('');
        }
      } else if (operation === 'traverse-inorder') treeTraverse('inorder');
      else if (operation === 'traverse-preorder') treeTraverse('preorder');
      else if (operation === 'traverse-postorder') treeTraverse('postorder');
    }
  };

  const renderTree = (node: TreeNode | null, level: number = 0): JSX.Element | null => {
    if (!node) return null;
    return (
      <div className="flex flex-col items-center">
        <div className="px-4 py-2 bg-cyan/20 text-cyan rounded-lg mb-2 font-semibold">
          {node.value}
        </div>
        {(node.left || node.right) && (
          <div className="flex gap-4 mt-2">
            {renderTree(node.left, level + 1)}
            {renderTree(node.right, level + 1)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="glass p-8 rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 relative"
      >
        <div className="relative inline-block">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-3 -left-3 w-16 h-16 bg-cyan/20 rounded-full blur-xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-3 -right-3 w-16 h-16 bg-cyan/20 rounded-full blur-xl"
          />
          <h3 className="text-3xl font-bold mb-3 text-cyan relative z-10">
            Interactive DSA Visualizer
          </h3>
          
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Dive into the logic! Select a data structure, choose an operation, and watch each step unfold — turning complex algorithms into an intuitive, visual learning experience.
          </p>
        </div>
      </motion.div>

      {/* Data Structure Selection */}
      <div className="mb-6">
        <label className="block text-white mb-2">Select Data Structure:</label>
        <select
          value={dataStructure}
          onChange={(e) => {
            setDataStructure(e.target.value as DataStructure);
            resetDataStructure();
            setOperation('');
          }}
          className="w-full px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
        >
          <option value="array">Array</option>
          <option value="stack">Stack</option>
          <option value="queue">Queue</option>
          <option value="linkedlist">Linked List</option>
          <option value="tree">Binary Search Tree</option>
        </select>
      </div>

      {/* Operation Selection */}
      <div className="mb-6">
        <label className="block text-white mb-2">Select Operation:</label>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="w-full px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
        >
          {dataStructure === 'array' && (
            <>
              <option value="">Select Operation</option>
              <option value="sort">Sort</option>
              <option value="search">Search</option>
              <option value="insert">Insert</option>
              <option value="delete">Delete</option>
            </>
          )}
          {dataStructure === 'stack' && (
            <>
              <option value="">Select Operation</option>
              <option value="push">Push</option>
              <option value="pop">Pop</option>
              <option value="peek">Peek</option>
              <option value="isEmpty">Is Empty</option>
            </>
          )}
          {dataStructure === 'queue' && (
            <>
              <option value="">Select Operation</option>
              <option value="enqueue">Enqueue</option>
              <option value="dequeue">Dequeue</option>
              <option value="front">Front</option>
              <option value="isEmpty">Is Empty</option>
            </>
          )}
          {dataStructure === 'linkedlist' && (
            <>
              <option value="">Select Operation</option>
              <option value="insert">Insert</option>
              <option value="delete">Delete</option>
              <option value="search">Search</option>
              <option value="traverse">Traverse</option>
            </>
          )}
          {dataStructure === 'tree' && (
            <>
              <option value="">Select Operation</option>
              <option value="insert">Insert</option>
              <option value="traverse-inorder">Inorder Traversal</option>
              <option value="traverse-preorder">Preorder Traversal</option>
              <option value="traverse-postorder">Postorder Traversal</option>
            </>
          )}
        </select>
      </div>

      {/* Algorithm Selection for Array */}
      {dataStructure === 'array' && operation === 'sort' && (
        <div className="mb-6">
          <label className="block text-white mb-2">Select Sorting Algorithm:</label>
          <select
            value={sortAlgo}
            onChange={(e) => setSortAlgo(e.target.value as SortAlgo)}
            className="w-full px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
          >
            <option value="bubble">Bubble Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
          </select>
        </div>
      )}

      {dataStructure === 'array' && operation === 'search' && (
        <div className="mb-6">
          <label className="block text-white mb-2">Select Searching Algorithm:</label>
          <select
            value={searchAlgo}
            onChange={(e) => setSearchAlgo(e.target.value as SearchAlgo)}
            className="w-full px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
          >
            <option value="linear">Linear Search</option>
            <option value="binary">Binary Search</option>
          </select>
        </div>
      )}

      {/* Input Fields */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4 flex-wrap">
          {/* Array: Always show input for adding elements */}
          {dataStructure === 'array' && (
            <>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addToArray()}
                placeholder="Enter a number to add"
                className="flex-1 min-w-[200px] px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addToArray}
                className="px-6 py-2 bg-cyan text-navy font-semibold rounded-lg"
              >
                Add
              </motion.button>
            </>
          )}

          {/* Array: Additional input for search/delete operations */}
          {dataStructure === 'array' && (operation === 'search' || operation === 'delete') && (
            <input
              type="number"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && executeOperation()}
              placeholder={`Enter number to ${operation}`}
              className="flex-1 min-w-[200px] px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
            />
          )}

          {/* Stack: Input for push operation */}
          {dataStructure === 'stack' && operation === 'push' && (
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && executeOperation()}
              placeholder="Enter a number to push"
              className="flex-1 min-w-[200px] px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
            />
          )}

          {/* Queue: Input for enqueue operation */}
          {dataStructure === 'queue' && operation === 'enqueue' && (
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && executeOperation()}
              placeholder="Enter a number to enqueue"
              className="flex-1 min-w-[200px] px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
            />
          )}

          {/* Linked List: Input for insert operation */}
          {dataStructure === 'linkedlist' && operation === 'insert' && (
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && executeOperation()}
              placeholder="Enter a number to insert"
              className="flex-1 min-w-[200px] px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
            />
          )}

          {/* Linked List: Input for search/delete operations */}
          {dataStructure === 'linkedlist' && (operation === 'search' || operation === 'delete') && (
            <input
              type="number"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && executeOperation()}
              placeholder={`Enter number to ${operation}`}
              className="flex-1 min-w-[200px] px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
            />
          )}

          {/* Tree: Input for insert operation */}
          {dataStructure === 'tree' && operation === 'insert' && (
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && executeOperation()}
              placeholder="Enter a number to insert"
              className="flex-1 min-w-[200px] px-4 py-2 bg-navy/50 border border-cyan/30 rounded-lg text-white focus:outline-none focus:border-cyan"
            />
          )}

          {/* Reset Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetDataStructure}
            className="px-6 py-2 glass text-white rounded-lg flex items-center gap-2"
          >
            <RotateCcw size={18} />
            Reset
          </motion.button>
        </div>
      </div>

      {/* Display Current Data Structure */}
      <div className="mb-6">
        {dataStructure === 'array' && (
          <div className="flex gap-2 flex-wrap">
            {array.map((num, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  highlightedIndex === index
                    ? 'bg-cyan text-navy scale-110'
                    : 'glass text-white'
                }`}
              >
                {num}
              </motion.div>
            ))}
          </div>
        )}
        {dataStructure === 'stack' && (
          <div className="flex flex-col-reverse gap-2 items-center">
            <div className="text-cyan text-sm mb-2">Top</div>
            {stack.length === 0 ? (
              <div className="text-gray-400">Stack is empty</div>
            ) : (
              stack.map((num, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-4 py-2 bg-cyan/20 text-cyan rounded-lg font-semibold w-20 text-center"
                >
                  {num}
                </motion.div>
              ))
            )}
          </div>
        )}
        {dataStructure === 'queue' && (
          <div className="flex gap-2 items-center">
            <div className="text-cyan text-sm">Front</div>
            <div className="flex gap-2">
              {queue.length === 0 ? (
                <div className="text-gray-400">Queue is empty</div>
              ) : (
                queue.map((num, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-4 py-2 bg-cyan/20 text-cyan rounded-lg font-semibold"
                  >
                    {num}
                  </motion.div>
                ))
              )}
            </div>
            <div className="text-cyan text-sm">Rear</div>
          </div>
        )}
        {dataStructure === 'linkedlist' && (
          <div className="flex gap-2 items-center flex-wrap">
            {linkedList.length === 0 ? (
              <div className="text-gray-400">Linked List is empty</div>
            ) : (
              linkedList.map((num, index) => (
                <div key={index} className="flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-4 py-2 bg-cyan/20 text-cyan rounded-lg font-semibold"
                  >
                    {num}
                  </motion.div>
                  {index < linkedList.length - 1 && (
                    <span className="text-cyan">→</span>
                  )}
                </div>
              ))
            )}
          </div>
        )}
        {dataStructure === 'tree' && (
          <div className="flex justify-center overflow-x-auto">
            {tree ? (
              <div className="p-4">{renderTree(tree)}</div>
            ) : (
              <div className="text-gray-400">Tree is empty</div>
            )}
          </div>
        )}
      </div>

      {/* Execute Button */}
      {operation && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={executeOperation}
          disabled={isAnimating}
          className="w-full px-6 py-3 bg-cyan text-navy font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
        >
          <Play size={20} />
          {isAnimating ? 'Processing...' : 'Execute Operation'}
        </motion.button>
      )}

      {/* Steps Output */}
      <AnimatePresence>
        {steps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 bg-navy/70 rounded-lg max-h-60 overflow-y-auto"
          >
            <h4 className="text-cyan font-semibold mb-2">Steps:</h4>
            <div className="space-y-1 font-mono text-sm">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300"
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="px-6 py-2 glass border-2 border-cyan/50 text-white font-semibold rounded-lg flex items-center gap-2 hover:border-cyan hover:bg-cyan/10 transition-all mx-auto"
        >
          <MessageCircle size={18} />
          Share Your Thoughts
        </motion.button>
      </motion.div>
    </div>
  );
}
