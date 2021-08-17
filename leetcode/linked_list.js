```LRU Cache(size)

	get(key)        -> whether or not the LRU cache, -> returns the value     O(1)
	put(key, value) -> null																										O(1)
  
cache1 = new LRUCache(3) => initates a size 3 cache
cache1.get('b') 	       => returns null
cache1.put('b', 3)       => returns null
cache1.put('c', 4)       => returns null
cache1.get('b')          => returns 3    orders cache to make 'b' most recently used.
cache1.put('d', 5)       => returns null
cache1.put('e', 6)       => returns null evicts 'c' as it is the least recently used.
cache1.get('c')          => returns null```