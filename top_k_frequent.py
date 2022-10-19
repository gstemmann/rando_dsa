class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # make a hashmap? with a key and the frequency is the value
        # return the most that happen the most frequently
        
        d = {}
        freq = [[] for i in range(len(nums)+1)]
        #x['tony'] = 7
        #print(x)
        
        for num in nums:
            d[num] = d.get(num, 0) + 1
        for key, value in d.items():
            freq[value].append(key)

        result = []
        for i in range(len(freq)-1, 0, -1):
            for n in freq[i]:
                result.append(n)
                if len(result) == k:
                    return result